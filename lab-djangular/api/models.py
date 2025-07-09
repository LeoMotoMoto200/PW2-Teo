from django.db import models

# Create your models here.

class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    completada = models.BooleanField(default=False)

    def _str_(self):
        return self.titulo

