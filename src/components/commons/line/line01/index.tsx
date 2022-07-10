import styled from "@emotion/styled";

interface ILine01Props {
  color: string;
  height?: number;
}
export default function Line01(props: ILine01Props) {
  return <Line color={props.color} height={props.height} />;
}

const Line = styled.hr`
  width: 100%;
  border: 0;
  color: ${(props: ILine01Props) => props.color};
  height: ${(props: ILine01Props) =>
    props.height ? `${props.height}px` : `1px`};
`;
