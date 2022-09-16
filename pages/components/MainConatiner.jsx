import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import styles from '../../styles/Home.module.css';

function MainContainer() {
  return (
    <Container className={styles.maincontainer} fluid="md">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>#</th>
                <th>#</th>
                <th>#</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
