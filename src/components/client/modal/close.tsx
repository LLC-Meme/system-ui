"use client";

import * as Dialog from "@radix-ui/react-dialog";

/**
 * モーダルを閉じる機能を提供するコンポーネント
 * これをクリックすることでモーダルを閉じることができる
 * 適宜、子にアイコンやボタンなどを追加する
 */
const ModalClose = Dialog.Close;
ModalClose.displayName = "ModalClose";

export default ModalClose;
