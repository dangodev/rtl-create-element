# react-testing-library createElement bug repro

Repo used to test a bug.

```
npm i
npm test
```

You’ll see the following error:

```
TypeError: Cannot read property 'createElement' of undefined

   5 |
   6 | test("NotFound page", async () => {
>  7 |   const { getByTestId } = render(<App />);
     |                                  ^
   8 |   expect(getByTestId("title")).toHaveTextContent("Hello CodeSandbox");
   9 | });
  10 |
```
