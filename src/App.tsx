import styled from 'styled-components';

import { FormArea } from "./components/organisms/FormArea"
import { HistoryArea } from "./components/organisms/HistoryArea"

import { RecordProvider, useRecord } from './providers/RecordProvider';

export default function App() {
  return (
    <RecordProvider>
      <SContainer>
        <div className='container'>
          <h1>学習記録アプリ</h1>
          <FormArea useRecord={useRecord} />
          <HistoryArea useRecord={useRecord} />
        </div>
      </SContainer>
    </RecordProvider>
  );
}

const SContainer = styled.div`
  body {
    margin: 10px auto;
    font-size: 18px;
    color: #3b3b3b;
  }

  .container {
    margin: 0 auto;
    padding: 8px;
    width: 600px;
    border-radius: 8px;
  }

  .history-area {
    border: 2px solid #aacfd0;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    background-color: #c9dede;
  }

  h1 {
    margin: 0;
    padding-bottom: 8px;
    text-align: center;
  }

  p {
    margin: 0 0 8px;
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 600px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
}`;