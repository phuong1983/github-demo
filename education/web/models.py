from django.db import models

# Create your models here.
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