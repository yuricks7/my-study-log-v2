import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

// モックの設定
jest.mock("../functions/database/Supabase/dbUsecase", () => ({
  dbUsecase: {
    fetchList: jest.fn(),
    add: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  }
}));

const mockRecords = [{
  id: "aaaaaa",
  created_at: new Date(),
  title: "勉強の記録10",
  time: 10,
}];

/*
 * サンプルテスト
 */
describe("初期表示のテスト", () => {
  test("タイトルが画面上に表示されている", async () => {
    const { dbUsecase } = require("../functions/database/Supabase/dbUsecase");
    dbUsecase.fetchList.mockResolvedValue(mockRecords);

    // 実行
    render(<App />);

    // 検証
    const headElement = screen.getByRole('heading', { name: '学習記録アプリ' });
    await waitFor(() => {
      expect(headElement).toBeInTheDocument();
    });
  });
});