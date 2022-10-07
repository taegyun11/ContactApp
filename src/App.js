import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';


// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 Search 창이 있다
// 2. 리스트에는 유저 이름과 전화번호를 추가할수있다
// 3. 리스트 아이템의 개수가 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을수있다



function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
