def bsort(x):
    n=len(x)
    k=1
    while(True):
        c=0
        for i in range(0,n-k):
            if x[i]>x[i+1]:
                x[i],x[i+1]=x[i+1],x[i]
                c+=1
        if c==0 :
            break
        k+=1
