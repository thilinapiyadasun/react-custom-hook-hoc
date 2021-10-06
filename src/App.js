import "./styles.css";
import UseFetch from "./useFetch";
import SampleComponent from "./sampleComponent";

export default function App() {
  const { data, isLoading } = UseFetch();
  return (
    <div className="App">
      <SampleComponent
        userName="THILINA"
        email="testEmail@me.com"
      ></SampleComponent>
      <h1>Hello CodeSandbox</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h2>{data?.title}</h2>
          <h2>{data?.body}</h2>
        </div>
      )}
    </div>
  );
}
