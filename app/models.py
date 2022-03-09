from django.db import models

class Post(models.Model):
      app_name=models.CharField(max_length=200,null=True)
      img=models.ImageField(upload_to="media")
      link=models.CharField(max_length=200,null=True)
      def __str__(self):
	      return self.app_name



