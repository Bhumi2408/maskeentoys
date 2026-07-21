import Image from "next/image";

function parseInline(text) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // **bold**
      parts.push(
        <strong key={key++} className="font-bold text-[#1a1a1a]">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // [text](url)
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
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function BlogContentRenderer({ content }) {
  return (
    <div className="prose-custom">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-sm sm:text-base text-[#4a4a4a] leading-7 mb-5"
              >
                {parseInline(block.text)}
              </p>
            );

          case "heading":
            return (
              <h2
                key={index}
                className="font-capriola text-[#1a1a1a] text-xl sm:text-2xl md:text-3xl mt-10 mb-4"
              >
                {parseInline(block.text)}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={index}
                className="font-capriola font-medium text-[#1a1a1a] text-base sm:text-xl md:text-2xl mt-7 mb-3"
              >
                {parseInline(block.text)}
              </h3>
            );

          case "subheading4":
            return (
              <h4
                key={index}
                className="font-capriola font-medium text-[#EA5288] text-xl mt-6 mb-2.5"
              >
                {parseInline(block.text)}
              </h4>
            );

          case "subheading5":
            return (
              <h5
                key={index}
                className="font-capriola font-medium text-[#1a1a1a] text-xl mt-5 mb-2"
              >
                {parseInline(block.text)}
              </h5>
            );

            case "subheading6":
            return (
              <h6
                key={index}
                className="font-capriola font-medium text-[#EA5288] mt-5 mb-2"
              >
                {parseInline(block.text)}
              </h6>
            );

          case "list":
            return (
              <ul key={index} className="mb-6 flex flex-col gap-2.5 pl-1">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#4a4a4a] leading-6"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F15D87] shrink-0" />
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "table":
            return (
              <div
                key={index}
                className="mb-8 overflow-x-auto rounded-[14px] border border-[#EEE]"
              >
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#F15D87]">
                      {block.headers.map((h, i) => (
                        <th
                          key={i}
                          className="text-left text-white font-bold px-4 py-3"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-[#FDEEF1]" : "bg-white"}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 text-[#4a4a4a] border-t border-[#EEE]"
                          >
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

            case "image":
            return (
              <div
                key={index}
                className="relative w-full aspect-[16/9] my-7 sm:my-8 rounded-[16px] sm:rounded-[20px] overflow-hidden"
              >
                <Image
                  src={block.src}
                  alt={block.alt || ""}
                  fill
                  sizes="(max-width: 850px) 100vw, 850px"
                  className="object-cover"
                />
              </div>
            );

         case "faq":
            return (
              <div
                key={index}
                className="mb-4 rounded-[14px] sm:rounded-[16px] bg-[#FDEEF1] border border-[#F6D3DE] px-5 sm:px-6 py-4 sm:py-5"
              >
                <p className="flex items-start gap-2.5 font-bold text-[#1a1a1a] text-sm sm:text-base leading-6">
                  <span className="text-[#F15D87] shrink-0">Q.</span>
                  {parseInline(block.question)}
                </p>
                <p className="mt-2.5 pl-6 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
                  {parseInline(block.answer)}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}