"use client";

import * as Dialog from "@radix-ui/react-dialog";

/**
 * シートを閉じる機能を提供するコンポーネント
 * これをクリックすることでシートを閉じることができる
 * 適宜、子にアイコンやボタンなどを追加する
 */
const SheetClose = Dialog.Close;
SheetClose.displayName = "SheetClose";

export default SheetClose;
