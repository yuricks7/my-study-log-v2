import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

/*
 * サンプルテスト
 */
describe("タイトルが表示されている", () => {
  test("[正常系]タイトルが表示されている", async () => {
    // 実行
    render(<App />);

    // 検証
    waitFor(() => {
      expect(screen.getByText("学習記録アプリ")).toBeInTheDocument();
    });
  });
});