import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "./table";


function BasicTable() {
  return (
    <Table.Container tableStyle="basic">
      <Table.Head>
        <Table.Row>
          <Table.HeadingCell>Column 1</Table.HeadingCell>
          <Table.HeadingCell>Column 2</Table.HeadingCell>
          <Table.HeadingCell>Column 3</Table.HeadingCell>
          <Table.HeadingCell>Column 4</Table.HeadingCell>
          <Table.HeadingCell>Column 5</Table.HeadingCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row muted>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
          <Table.Cell>Row 1, Cell 3</Table.Cell>
          <Table.Cell>Row 1, Cell 4</Table.Cell>
          <Table.Cell>Row 1, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
          <Table.Cell>Row 2, Cell 3</Table.Cell>
          <Table.Cell>Row 2, Cell 4</Table.Cell>
          <Table.Cell>Row 2, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row muted>
          <Table.Cell>Row 3, Cell 1</Table.Cell>
          <Table.Cell>Row 3, Cell 2</Table.Cell>
          <Table.Cell>Row 3, Cell 3</Table.Cell>
          <Table.Cell>Row 3, Cell 4</Table.Cell>
          <Table.Cell>Row 3, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 4, Cell 1</Table.Cell>
          <Table.Cell>Row 4, Cell 2</Table.Cell>
          <Table.Cell>Row 4, Cell 3</Table.Cell>
          <Table.Cell>Row 4, Cell 4</Table.Cell>
          <Table.Cell>Row 4, Cell 5</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Container>
  );
}

function PlainTable() {
  return (
    <Table.Container tableStyle="plain">
      <Table.Head>
        <Table.Row>
          <Table.HeadingCell>Column 1</Table.HeadingCell>
          <Table.HeadingCell>Column 2</Table.HeadingCell>
          <Table.HeadingCell>Column 3</Table.HeadingCell>
          <Table.HeadingCell>Column 4</Table.HeadingCell>
          <Table.HeadingCell>Column 5</Table.HeadingCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
          <Table.Cell>Row 1, Cell 3</Table.Cell>
          <Table.Cell>Row 1, Cell 4</Table.Cell>
          <Table.Cell>Row 1, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row muted>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
          <Table.Cell>Row 2, Cell 3</Table.Cell>
          <Table.Cell>Row 2, Cell 4</Table.Cell>
          <Table.Cell>Row 2, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 3, Cell 1</Table.Cell>
          <Table.Cell>Row 3, Cell 2</Table.Cell>
          <Table.Cell>Row 3, Cell 3</Table.Cell>
          <Table.Cell>Row 3, Cell 4</Table.Cell>
          <Table.Cell>Row 3, Cell 5</Table.Cell>
        </Table.Row>
        <Table.Row muted>
          <Table.Cell>Row 4, Cell 1</Table.Cell>
          <Table.Cell>Row 4, Cell 2</Table.Cell>
          <Table.Cell>Row 4, Cell 3</Table.Cell>
          <Table.Cell>Row 4, Cell 4</Table.Cell>
          <Table.Cell>Row 4, Cell 5</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Container>
  );
}


/**
 * テーブルコンポーネントです。  
 * `basic`スタイルと`plain`スタイルの2つのスタイルを提供します。  
 * 
 * 
 * ## **使い方**  
 * 以下の各コンポーネントを組み合わせて使用します。  
 * - `Table.Container`: テーブル全体を囲むコンテナです。`<table>`に対応します。  
 * - `Table.Head`: テーブルのヘッダ部分を囲むコンテナです。`<thead>`に対応します。  
 * - `Table.Body`: テーブルのボディ部分を囲むコンテナです。`<tbody>`に対応します。  
 * - `Table.Foot`: テーブルのフッタ部分を囲むコンテナです。`<tfoot>`に対応します。  
 * - `Table.Row`: テーブルの行を表すコンテナです。`<tr>`に対応します。  
 * - `Table.HeadingCell`: テーブルのヘッダセルを表すコンテナです。`<th>`に対応します。  
 * - `Table.Cell`: テーブルのセルを表すコンテナです。`<td>`に対応します。  
 */
const meta = {
  title: "UI/Table",
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const basic: Story = {
  render: BasicTable,
};

export const plain: Story = {
  render: PlainTable,
};