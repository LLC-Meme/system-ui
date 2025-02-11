import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "./table";
import Thead from "./thead";
import Tbody from "./tbody";
import Tr from "./tr";
import Th from "./th";
import Td from "./td";
import Caption from "./caption";
import PlainTableItem from "./plain-table-item";

function BasicTable() {
  return (
    <Table tableStyle="basic">
      <Thead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
          <Th>Column 4</Th>
          <Th>Column 5</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Row 1, Cell 1</Td>
          <Td>Row 1, Cell 2</Td>
          <Td>Row 1, Cell 3</Td>
          <Td>Row 1, Cell 4</Td>
          <Td>Row 1, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 2, Cell 1</Td>
          <Td>Row 2, Cell 2</Td>
          <Td>Row 2, Cell 3</Td>
          <Td>Row 2, Cell 4</Td>
          <Td>Row 2, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 3, Cell 1</Td>
          <Td>Row 3, Cell 2</Td>
          <Td>Row 3, Cell 3</Td>
          <Td>Row 3, Cell 4</Td>
          <Td>Row 3, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 4, Cell 1</Td>
          <Td>Row 4, Cell 2</Td>
          <Td>Row 4, Cell 3</Td>
          <Td>Row 4, Cell 4</Td>
          <Td>Row 4, Cell 5</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

function PlainTable() {
  return (
    <Table tableStyle="plain" className="w-[800px]">
      <Tbody>
        <Tr>
          <Td>
            <PlainTableItem label="id">Row 1, Cell 1</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="name">Row 1, Cell 2</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="age">Row 1, Cell 3</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="address">Row 1, Cell 4</PlainTableItem>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <PlainTableItem label="id">Row 2, Cell 1</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="name">Row 2, Cell 2</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="age">Row 2, Cell 3</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="address">Row 2, Cell 4</PlainTableItem>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <PlainTableItem label="id">Row 3, Cell 1</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="name">Row 3, Cell 2</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="age">Row 3, Cell 3</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="address">Row 3, Cell 4</PlainTableItem>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <PlainTableItem label="id">Row 4, Cell 1</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="name">Row 4, Cell 2</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="age">Row 4, Cell 3</PlainTableItem>
          </Td>
          <Td>
            <PlainTableItem label="address">Row 4, Cell 4</PlainTableItem>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

function MinimalTable() {
  return (
    <Table tableStyle="minimal">
      <Caption>Caption</Caption>
      <Thead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
          <Th>Column 4</Th>
          <Th>Column 5</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Row 1, Cell 1</Td>
          <Td>Row 1, Cell 2</Td>
          <Td>Row 1, Cell 3</Td>
          <Td>Row 1, Cell 4</Td>
          <Td>Row 1, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 2, Cell 1</Td>
          <Td>Row 2, Cell 2</Td>
          <Td>Row 2, Cell 3</Td>
          <Td>Row 2, Cell 4</Td>
          <Td>Row 2, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 3, Cell 1</Td>
          <Td>Row 3, Cell 2</Td>
          <Td>Row 3, Cell 3</Td>
          <Td>Row 3, Cell 4</Td>
          <Td>Row 3, Cell 5</Td>
        </Tr>
        <Tr>
          <Td>Row 4, Cell 1</Td>
          <Td>Row 4, Cell 2</Td>
          <Td>Row 4, Cell 3</Td>
          <Td>Row 4, Cell 4</Td>
          <Td>Row 4, Cell 5</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

/**
 * テーブルコンポーネントです。
 * `basic`スタイルと`minimal`スタイルの2つのスタイルを提供します。
 *
 *
 * ## **使い方**
 * 以下の各コンポーネントを組み合わせて使用します。
 * - `Table`: テーブル全体を囲むコンテナです。`<table>`に対応します。
 * - `Thead`: テーブルのヘッダ部分を囲むコンテナです。`<thead>`に対応します。
 * - `Tbody`: テーブルのボディ部分を囲むコンテナです。`<tbody>`に対応します。
 * - `Tfoot`: テーブルのフッタ部分を囲むコンテナです。`<tfoot>`に対応します。
 * - `Tr`: テーブルの行を表すコンテナです。`<tr>`に対応します。
 * - `Th`: テーブルのヘッダセルを表すコンテナです。`<th>`に対応します。
 * - `Td`: テーブルのセルを表すコンテナです。`<td>`に対応します。
 */
const meta = {
  title: "UI/Table",
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const basic: Story = {
  render: BasicTable,
};

export const minimal: Story = {
  render: MinimalTable,
};

export const plain: Story = {
  render: PlainTable,
};
