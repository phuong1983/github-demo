# Generated by Django 4.2 on 2023-10-09 01:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0008_remove_exercise_unit_remove_exercise_vocabularies_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
