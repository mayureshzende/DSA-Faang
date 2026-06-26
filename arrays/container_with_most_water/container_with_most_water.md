this is the classic problem again

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

follow up

1. should we consider the edges or not.
2. what if there is a larger number between the maximum area
   ex. 3,9,5,7
   as the max will be
   -> what ever is the minimum we take the value and multiply it by the length between them
   i.e 3 _ 3 (len between 7 - 3 ) = 21 area (l _ w)
   and the other one is 9 & 7 -> 7 _ 2 = 14 area ( l _ w)

3. what sshould we return if there is only one element,
4. what if there are same area twice
5.
