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
    def __str__(self):
        return self.name

class Vocabulary(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='Tên từ vựng')
    image = models.ImageField(upload_to='vocabulary_images/', blank=True, null=True, verbose_name='Hình ảnh')
    english_definition = models.TextField(verbose_name='Giải thích Anh-Anh')
    english_to_vietnamese_definition = models.TextField(verbose_name='Giải thích Anh-Việt')
    example = models.CharField(max_length=255,blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Từ vựng'
        verbose_name_plural = 'Từ vựng'

class UserProfile(models.Model):    
    name = models.CharField(max_length=100,default='insert-name')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='web_userprofile')
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return self.name

class Month(models.Model):
    name = models.CharField(max_length=100)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Document_type(models.Model):
    MONTHLY_CHOICES = (
        ('Sach', 'Sach'),
        ('Tro Choi', 'Tro Choi'),
        ('Link MP3', 'Link MP3'),
        ('Link MP4', 'Link MP4'),
    )
    name = models.CharField(max_length=100,default='nobook')
    document_type = models.CharField(max_length=50, choices=MONTHLY_CHOICES)
    month = models.ForeignKey(Month, on_delete=models.CASCADE)
    vocabularies = models.ManyToManyField('Vocabulary')
    def __str__(self):
        return self.name

class Unit(models.Model):
    name = models.CharField(max_length=100,default='insert-Unit')
    document = models.ForeignKey(Document_type, on_delete=models.CASCADE)
    number = models.IntegerField()
    def __str__(self):
        return self.name

class Theory(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    content = models.TextField()
    def __str__(self):
        return self.name
class Exercise(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    vocabularies = models.ManyToManyField('Vocabulary')
    def __str__(self):
        return self.title

class Question(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    vocabularies = models.ManyToManyField('Vocabulary')
    def __str__(self):
        return self.title


