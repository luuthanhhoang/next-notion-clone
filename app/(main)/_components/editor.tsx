"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useTheme } from "next-themes";
import { PartialBlock } from "@blocknote/core";
import { useEdgeStore } from "@/lib/edgestore";

type Props = {
  onChange: (value: string) => void;
  initialData?: string;
  editable?: boolean;
};

const Editor = ({ onChange, initialData, editable }: Props) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();
  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({ file });
    return res.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialData
      ? (JSON.parse(initialData) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editable={editable}
        onChange={() => {
          onChange(JSON.stringify(editor.document, null, 2));
        }}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
