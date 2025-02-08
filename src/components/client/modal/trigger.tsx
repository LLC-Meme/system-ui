"use client";

import * as Dialog from "@radix-ui/react-dialog";

/**
 * モーダルを表示するトリガーとなるコンポーネント
 * これをクリックすることでモーダルを表示することができる
 */
const ModalTrigger = Dialog.Trigger;
ModalTrigger.displayName = "ModalTrigger";

export default ModalTrigger;
