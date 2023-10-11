# Generated by Django 4.2 on 2023-10-10 08:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tool_training', '0009_delete_unknow'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Books',
            new_name='Book',
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='unit',
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='vocabularies',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
        migrations.RemoveField(
            model_name='questions',
            name='exercise',
        ),
        migrations.RemoveField(
            model_name='questions',
            name='vocabularies',
        ),
        migrations.RemoveField(
            model_name='theory',
            name='unit',
        ),
        migrations.RemoveField(
            model_name='units',
            name='document',
        ),
        migrations.DeleteModel(
            name='Exercise',
        ),
        migrations.DeleteModel(
            name='Questions',
        ),
        migrations.DeleteModel(
            name='Theory',
        ),
        migrations.DeleteModel(
            name='Units',
        ),
    ]
