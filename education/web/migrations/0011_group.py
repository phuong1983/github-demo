# Generated by Django 4.2 on 2023-10-09 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0010_delete_group'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
