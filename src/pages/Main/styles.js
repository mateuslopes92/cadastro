import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;

  margin: 40px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;

  header {
    a {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;

      background: #0800f0;
      border: 0;
      padding: 10px;
      color: #fff;
      border-radius: 4px;

      span {
        margin-left: 10px;
      }
    }
  }

  table {
    width: 100%;

    background: #fff;
    padding: 5px;
    border-collapse: collapse;
    margin-top: 30px;

    thead {
      background: #dbdbdb;

      tr {
        border: none;
        text-align: center;
        height: 50px;

        th {
          font-size: 16px;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        border: none;
        text-align: center;
        height: 50px;
        :hover {
          cursor: pointer;
          background: #f2f2f2;
        }

        &:not(:last-of-type) {
          border-bottom: 1.5px solid #e0e0e0;
        }

        td {
          color: #666666;
          text-align: center;
        }
      }
    }
  }
`;

export const ModalBackground = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  display: ${props => (props.visible ? "block" : "none")};

  max-width: 900px;
  margin: 150px auto;
  padding: 0 5px;
  justify-content: center;
  background: #fff;
  padding: 20px;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    padding-left: 15px;

    input {
      height: 45px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #444;
    }

    label {
      color: #444;
      font-weight: bold;
      padding-bottom: 8px;
      margin-top: 25px;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      @media (max-width: 890px) {
        justify-content: center;
      }

      div {
        display: flex;
        flex-direction: column;
        width: 400px;
        margin-right: 15px;

        select {
          height: 45px;
          color: #444;
          font-size: 14px;
          line-height: 0;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      }
    }

    span {
      margin: 0;
      color: #fb6f91;
      font-weight: bold;
    }
  }
`;

export const Cep = styled.div`
  display: flex;
  position: relative;
`;

export const BtnSearch = styled.button`
  position: absolute;
  right: 1.5px;
  bottom: 2.5px;
  background: #0800f0;
  border: 0;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const BtnBlue = styled.button`
  background: #0800f0;
  border: 0;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  width: ${props => (props.width ? props.width : "100px")};
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  right: 0;

  svg {
    margin-right: 5px;
  }
`;

export const BtnCancel = styled.button`
  background: #666;
  border: 0;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  width: ${props => (props.width ? props.width : "120px")};
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  right: 0;
  margin-right: 15px;

  svg {
    margin-right: 5px;
  }
`;
