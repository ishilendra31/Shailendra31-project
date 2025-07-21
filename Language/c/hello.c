  #include <stdio.h>
  #include <string.h>
  int main (){
	int a=123;
  int r,l;
  while (a!=0)
      { l=a%10;
       r=l;
       a=a/10;
        printf("%d",r);
      }
 return 0;
  }