import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

// モックの設定
jest.mock("../functions/database/DbUsecase", () => ({
  DbUsecase: {
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
const mockRecord = mockRecords[0];

describe("入力フォームが存在すること", () => {
  // 初期設定
  const setUp = () => {
    render(<App />);
    const titleInput = screen.getAllByLabelText("学習内容")[0];
    const timeInput = screen.getAllByLabelText("学習時間")[0];
    const submitButton = screen.getAllByRole('button', {name: "追加"})[0];

    return { titleInput, timeInput, submitButton };
  };

  test("各要素が正しく読み込まれる", async () => {
    const { DbUsecase } = require("../functions/database/DbUsecase");
    DbUsecase.fetchList.mockResolvedValue(mockRecords);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(mockRecord.title)).toBeInTheDocument();
    })

    // 入力フォームの存在確認
    const { titleInput, timeInput, submitButton } = setUp();
    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue('');

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveValue(0);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

  test("フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている", async () => {
    const { titleInput, timeInput, submitButton } = setUp();
    userEvent.type(titleInput, mockRecord.title);
    userEvent.type(timeInput, String(mockRecord.time));

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(mockRecord.title)).toBeInTheDocument();
      expect(screen.getByText(`${mockRecord.time}時間`)).toBeInTheDocument();
    });
  });

  test("削除ボタンを押すと学習記録が削除される", async () => {
    const { titleInput, timeInput, submitButton } = setUp();
    userEvent.type(titleInput, mockRecord.title);
    userEvent.type(timeInput, String(mockRecord.time));
    fireEvent.click(submitButton);

    const deleteButtons = (await screen.findAllByRole('button', {name: "削除"}));
    const deleteButton: HTMLElement = deleteButtons[deleteButtons.length - 1];
    fireEvent.click(deleteButton);

    waitFor(() => {
      expect(screen.getByText(mockRecord.title)).not.toBeInTheDocument();
      expect(screen.getByText(`${mockRecord.time}時間`)).not.toBeInTheDocument();
    })
  });

  test("入力をしないで登録を押すとエラーが表示される", async () => {
    const { submitButton } = setUp();

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("学習した内容を入力してください")).toBeInTheDocument();
      expect(screen.getByText("1以上の整数を入力してください")).toBeInTheDocument();
    });
  });

});