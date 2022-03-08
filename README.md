# tallerTest

#######################################################

Solutions for the live code challenge

1 - runLEnc.js

2 - sortSquarArr.js

#######################################################
#######################################################

Questions:

Java Script
1 - Run-Length Encoding
Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A), cant naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A"

Sample Input
 string = "AAAAAAAAAAAAABBCCCCDD"
Sample Output
 "9A4A2B4C2D"
Test Case 1
{
  "string": "AAAAAAAAAAAAABBCCCCDD"
}
Output
"9A4A2B4C2D"
Test Case 2
{
  "string": "aA"
}
Output
"1a1A"
Test Case 3
{
  "string": "122333"
}
Output
"112233"
2 - Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input
  array = [1, 2, 3, 5, 6, 8, 9]
Sample Output
    [1, 4, 9, 25, 36, 64, 81]
Test Case 1
{
  "array": [1, 2, 3, 5, 6, 8, 9]
}
Output
    [1, 4, 9, 25, 36, 64, 81]
Test Case 2
{
    "array": [-2, -1]
}
Output
    [1, 4]
Test Case 3
  "array": [-10, -5, 0, 5, 10]
Output
    [0, 25, 25, 100, 100]
