# Generated by Django 4.2 on 2023-10-09 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0014_delete_quest'),
    ]

    operations = [
        migrations.CreateModel(
            name='Excercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
    ]
