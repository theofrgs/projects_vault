import React from "react";
import { Card } from "./ui/card";

export enum TagVariant {
  S,
  M,
  L,
}
type Props = { title: string; description?: string; variant?: TagVariant };

async function Tag({ title, variant = TagVariant.M }: Props) {
  // TODO add hover ?
  return (
    <Card
      className={`px-${
        TagVariant.L === variant ? "6" : TagVariant.S === variant ? "2" : "4"
      } py-${TagVariant.S === variant ? "1" : "2"} rounded-xl`}
    >
      <p
        className={`text-[8px] sm:text-${
          TagVariant.L === variant
            ? "lg"
            : TagVariant.S === variant
            ? "sm"
            : "base"
        }`}
      >
        {title}
      </p>
    </Card>
  );
}

export default Tag;
