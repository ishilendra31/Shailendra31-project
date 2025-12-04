# n=6
# arr=[4 ,2 ,8 ,16, 32 ,64]
# seq=[]
# i=0
# c=0
# while i<n:
#   if(arr[i]!=0):
#     temp=[arr[i]]
#     l=1
#     t=i
#     j=i+1
#     while j<n:
#       if(arr[j]%arr[t]==0) and arr[j]!=0 and arr[t]!=0:
#         temp+=[arr[j]]
#         l+=1
#         t+=1
#       j+=1
#     if(l>c):
#       seq=temp
#       c=l
#   i+=1
# if(c>=2):
#   print(c,seq)
# else:
#   print(1)



r=0
for i in range(5):
    r+=i
    i+=5
print(r)



