import styled from "@emotion/styled";

interface ILine01Props {
  color: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
}
export default function Line01(props: ILine01Props) {
  return (
    <Line
      color={props.color}
      height={props.height}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    />
  );
}

const Line = styled.hr`
  width: 100%;
  border: 0;
  color: ${(props: ILine01Props) => props.color};
  height: ${(props: ILine01Props) =>
    props.height ? `${props.height}px` : `0px`};

  margin-top: ${(props: ILine01Props) =>
    props.marginTop ? `${props.marginTop}px` : `0px`};

  margin-top: ${(props: ILine01Props) =>
    props.marginBottom ? `${props.marginBottom}px` : `0px`};
`;
