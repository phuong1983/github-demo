# Generated by Django 4.2 on 2023-10-10 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tool_training', '0013_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='name',
            field=models.CharField(default='noname', max_length=100),
        ),
    ]
