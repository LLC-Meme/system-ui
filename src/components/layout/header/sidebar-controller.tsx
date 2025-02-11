import * as React from "react";

/**
 * ヘッダー内に配置するサイドバーのコントローラー
 * 適宜`onClick`を設定して使用する
 */
const HeaderSidebarController = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ ...props }, ref) => {
  return (
    <button {...props} ref={ref} className="hover">
      <svg
        className="w-6 h-6 mr-2 text-info"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
      </svg>
    </button>
  );
});
HeaderSidebarController.displayName = "HeaderSidebarController";

export default HeaderSidebarController;
