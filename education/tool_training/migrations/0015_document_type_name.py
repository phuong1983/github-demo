# Generated by Django 4.2 on 2023-10-11 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tool_training', '0014_userprofile_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='document_type',
            name='name',
            field=models.CharField(default='nobook', max_length=100),
        ),
    ]