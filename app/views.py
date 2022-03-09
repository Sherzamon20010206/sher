from django.shortcuts import render
from .models import Post


# Create your views here.
def  HomePageView(request):

	return render(request,'index.html')

def  WorkView(request):
	context={
		'My_work':Post.objects.all()
	}
	return render(request,'index2.html',context)