import { CheckCircle2, HelpCircle } from "lucide-react";

function parseInline(text) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));

    if (match[1]) {
      parts.push(
        <strong key={key++} className="font-bold text-[#1a1a1a]">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      const isExternal = match[5].startsWith("http");
      parts.push(
        <a
          key={key++}
          href={match[5]}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-bold text-[#F15D87] hover:underline"
        >
          {match[4]}
        </a>,
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function ServiceContentRenderer({ content }) {
  const elements = [];
  let faqBuffer = [];
  let listBuffer = null;

  const flushFaq = (key) => {
    if (faqBuffer.length === 0) return;
    elements.push(
      <div key={`faq-${key}`} className="mb-10 flex flex-col gap-3 sm:gap-4">
        {faqBuffer.map((faq, i) => (
          <div
            key={i}
            className="rounded-[14px] sm:rounded-[16px] bg-[#FDEEF1] border border-[#F6D3DE] px-5 sm:px-6 py-4 sm:py-5"
          >
            <p className="flex items-start gap-2.5 font-bold text-[#1a1a1a] text-sm sm:text-base leading-6">
              <HelpCircle
                size={18}
                className="text-[#F15D87] shrink-0 mt-0.5"
              />
              {parseInline(faq.question)}
            </p>
            <p className="mt-2.5 pl-[26px] text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
              {parseInline(faq.answer)}
            </p>
          </div>
        ))}
      </div>,
    );
    faqBuffer = [];
  };

  content.forEach((block, index) => {
    if (block.type === "faq") {
      faqBuffer.push(block);
      return;
    }
    flushFaq(index);

    switch (block.type) {
      case "heading":
        elements.push(
          <h2
            key={index}
            className="font-love text-[#21324A] text-2xl sm:text-3xl md:text-[34px] mt-12 mb-5 leading-tight"
          >
            {parseInline(block.text)}
          </h2>,
        );
        break;

      case "subheading":
        elements.push(
          <h3
            key={index}
            className="font-capriola text-[#F15D87] text-base sm:text-lg md:text-xl mt-8 mb-3"
          >
            {parseInline(block.text)}
          </h3>,
        );
        break;

      case "subheading4":
        elements.push(
          <h4
            key={index}
            className="font-bold text-[#21324A] text-base sm:text-[17px] mt-6 mb-2.5"
          >
            {parseInline(block.text)}
          </h4>,
        );
        break;

      case "paragraph":
        elements.push(
          <p
            key={index}
            className="text-sm sm:text-base text-[#5F5F5F] leading-7 mb-5"
          >
            {parseInline(block.text)}
          </p>,
        );
        break;

      // ServiceContentRenderer.jsx me sirf "list" case ko replace karo:

      case "list": {
        const listCount = elements.filter(
          (_, i) => content[i]?.type === "list",
        ).length;
        const isCardStyle = listCount % 2 === 0; // alternate karta hai style

        if (isCardStyle) {
          elements.push(
            <div
              key={index}
              className="mb-8 grid sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[12px] bg-[#F8F5EF] px-4 sm:px-5 py-3 sm:py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#6EBE45] shrink-0 mt-0.5"
                  />
                  <span className="text-sm sm:text-base text-[#21324A] leading-6">
                    {parseInline(item)}
                  </span>
                </div>
              ))}
            </div>,
          );
        } else {
          elements.push(
            <ul key={index} className="mb-8 flex flex-wrap gap-x-8 gap-y-2.5">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm sm:text-base text-[#5F5F5F]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15D87] shrink-0" />
                  {parseInline(item)}
                </li>
              ))}
            </ul>,
          );
        }
        break;
      }

      default:
        break;
    }
  });

  flushFaq("end");

  return <div className="max-w-none">{elements}</div>;
}
