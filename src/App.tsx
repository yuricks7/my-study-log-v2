import './App.css';
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton"
import { AreaHeader } from "./components/atoms/headers/AreaHeader"

function App() {
  return (
    <div className="container">
      <h1>学習記録アプリ</h1>
      <div className='input-area'>
        <AreaHeader>入力</AreaHeader>
        <textarea></textarea>
        <input type="number" id="" />時間
        <PrimaryButton onClick={() => alert("Hi!")}>追加</PrimaryButton>
      </div>

      <div className='history-area'>
        <AreaHeader>履歴</AreaHeader>
        <table>
          <thead>
            <th>日付</th>
            <th>内容</th>
            <th>時間</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>2026/05/10</td>
              <td>数学</td>
              <td>3時間</td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>更新</PrimaryButton></td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>削除</PrimaryButton></td>
            </tr>
            <tr>
              <td>2026/05/15</td>
              <td>英語</td>
              <td>3時間</td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>更新</PrimaryButton></td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>削除</PrimaryButton></td>
            </tr>
            <tr>
              <td>2026/05/19</td>
              <td>合唱の練習</td>
              <td>3時間</td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>更新</PrimaryButton></td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>削除</PrimaryButton></td>
            </tr>
            <tr>
              <td>2026/05/20</td>
              <td>数学</td>
              <td>3時間</td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>更新</PrimaryButton></td>
              <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>削除</PrimaryButton></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;