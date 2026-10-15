// このファイルは「ブログ記事をどこから読み込み、
// どんな情報を持つ記事として扱うか」を定義するための設定ファイル


import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    // どこにあるマークダウンファイルを読み込むか
    loader: glob({
        base: "./src/content/blogs",
        pattern: "***.md",
    }),

    // 記事の情報の型を定義する
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { blog };
