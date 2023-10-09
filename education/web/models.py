from django.db import models
from django.contrib.auth.models import User  # Sử dụng User mặc định của Django
from django.contrib.auth.forms import UserCreationForm

# Create your models here.
class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','first_name','last_name','password1','password2']  #bắt buộc tên phải vậy
class Group(models.Model):
    name = models.CharField(max_length=100)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True)


class Vocabulary(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='Tên từ vựng')
    image = models.ImageField(upload_to='vocabulary_images/', blank=True, null=True, verbose_name='Hình ảnh')
    english_definition = models.TextField(verbose_name='Giải thích Anh-Anh')
    english_to_vietnamese_definition = models.TextField(verbose_name='Giải thích Anh-Việt')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Từ vựng'
        verbose_name_plural = 'Từ vựng'

class Question(models.Model):
    # exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    # vocabularies = models.ManyToManyField('Vocabulary')
# class Quest(models.Model):
#     # exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     vocabularies = models.ManyToManyField('Vocabulary')
