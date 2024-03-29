/*

test(name, function, timeout)

name: name of the test
function: contains the expectations to the test
timeout(optional): timeout before aborting the test -> default 5s

describe(name, function)

name: name of the group of tests
function: contains the expectations to the group of tests(can be multiple)

query priority

1 - getByRole
2 - getByLabelText
3 - getByPlaceholderText
4 - getByText
5 - getByDisplayValue
6 - getByAltText
7 - getByTitle
8 - getByTestId

note -> all getBy & getAllBy queries throw an error if they cant find a matching element


the first argument of every query is textmatch

type of textmatch can be either 
1) string 
    i) screen.getByText('hello world') -> full string match
    ii) screen.getByText('llo world', {exact: false}) -> substring match
    iii) screen.getByText('hello world', {exact: true}) -> ignore case

2) regex
    i) screen.getByText(/World/) -> substring match
    ii) screen.getByText(/world/i) -> substring match, ignore case
    iii) screen.getByText(/^hello world$/i) ->  full string match, ignore case

3) function
    syntax (content?: string, element?: Element | null) => boolean
    i) screen.getByText((content) => content.startsWith('hello'))


// QueryBy & QueryAllBy
note -> used for asserting elements which are not present in the DOM

1) queryBy
    i) returns the matching node for the query, if no matching node is found, it returns null
    ii) useful for asserting elements which are not present in the DOM
    ii) throws an error if more than one matching node is found

2) queryAllBy
    i) returns an array of matching nodes for the query, if no matching nodes are found, it returns an empty array


// FindBy & FindAllBy
note -> used for asserting elements which will appear or disappear in the DOM (this can be based on api or anything)

1) findBy
    i) returns a promise which resolves when an element is found which matches the given query
    ii) promise is rejected if no elements are found or if more than one element is found after a default timeout of 1000ms

2) findAllBy
    i) returns a promise which resolves to an array when an element is found which matches the given query
    ii) promise is rejected if no elements are found after a default timeout of 1000ms


=> Manual Queries

  RTL Queries
  i) getBy & getAllBy
  ii) queryBy & queryAllBy
  ii) findBy & findAllBy

  manual queries - we can use regular querySelector DOM API to find elements
    const {container} = render(<App />);
    const foo = container.querySelector('[data-foo="bar"]'); 
*/


test('jest is working', ()=>{
    expect(1).toBe(1)
})