import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

/*
 * サンプルテスト
 */
describe("初期表示のテスト", () => {
  test("タイトルが画面上に表示されている", async () => {
    // 実行
    render(<App />);

    // 検証
    const headElement = screen.getByRole('heading', { name: '学習記録アプリ' });
    await waitFor(() => {
      expect(headElement).toBeInTheDocument();
    });
  });
});