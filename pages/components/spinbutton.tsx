import SpinButton from "../../src/components/SpinButton";

const SpinButtonPage = () => (
  <>
    <h2>SpinButton</h2>
    <SpinButton
      ariaLabel="Number"
      values={[
        { value: 1, valueText: "first" },
        { value: 2, valueText: "second" },
        { value: 3, valueText: "third" },
      ]}
      initialIndex={0}
    />
  </>
);

export default SpinButtonPage;
