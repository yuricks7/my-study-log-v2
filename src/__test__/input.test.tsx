import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { App } from "../App";

describe("入力フォームが存在すること", () => {
  const setUp = () => {
    render(<App />);
    const titleInput = screen.getByRole(
      'textbox', {name: 'title'}
    );
    const timeInput = screen.getByRole(
      'textbox', {name: "time"}
    );
    const submitButton = screen.getByLabelText('追加');

    return { titleInput, timeInput, submitButton };
  };

  test("各要素が正しく読み込まれる", async () => {
    const { titleInput, timeInput, submitButton } = setUp();

    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue('');

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveValue(0);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeEnabled();
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