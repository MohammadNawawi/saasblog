import React from "react";

export default function MarkdownPreview({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return <div>{content}</div>;
}
