import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import { exp } from "firebase/firestore/pipelines";

// モックの設定
jest.mock("../functions/database/DbUsecase", () => ({
  DbUsecase: {
    fetchList: jest.fn(),
    add: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  }
}));

describe("入力フォームが存在すること", () => {
  // 初期設定
  const setUp = () => {
    render(<App />);
    const titleInput = screen.getByLabelText("学習内容 学習内容");
    const timeInput = screen.getAllByLabelText("学習時間");
    // const titleInput = screen.getByRole('textbox', {name: '学習内容'});
    // const timeInput = screen.getByRole('spinbutton', {name: "学習時間"});
    const submitButton = screen.getAllByRole('button', {name: "追加"});

    return { titleInput, timeInput, submitButton };
  };

  test("各要素が正しく読み込まれる", async () => {
    const mockData = [{
      id: "aaaaaa",
      created_at: new Date(),
      title: "モック",
      time: 3,
    }];

    const { DbUsecase } = require("../functions/database/DbUsecase");
    DbUsecase.fetchList.mockResolvedValue(mockData);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("モック")).toBeInTheDocument();
    })

    // 入力フォームの存在確認
    // expect(screen.getByPlaceholderText("内容を入力")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("整数を入力")).toBeInTheDocument();
    // expect(screen.getByRole("button", { name: "追加" })).toBeInTheDocument();
    const { titleInput, timeInput, submitButton } = setUp();
    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue('');

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveValue(0);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

  test("空のフィールドでフォームを送信した場合にバリデーションエラーが表示される", async () => {
    const { submitButton } = setUp();

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("学習した内容を入力してください")).toBeInTheDocument();
      expect(screen.getByText("1以上の整数を入力してください")).toBeInTheDocument();
    });
  })
});