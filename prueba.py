from scipy.stats import anderson

# Datos proporcionados
datos = [14, 7, 13, 16, 16, 13, 14, 17, 15, 16,
        13, 15, 10, 15, 16, 14, 12, 17, 14, 12,
        13, 20, 8, 17, 19, 11, 12, 17, 9, 18, 
        20, 10, 18, 15, 13, 16, 24, 18, 16, 18,
        12, 14, 20, 15, 10, 13, 21, 23, 15, 18]


# Realizar la prueba de Anderson-Darling
resultado = anderson(datos)

# Imprimir el estadístico de Anderson-Darling y los valores críticos
print("Estadístico de Anderson-Darling:", resultado.statistic)
print("Valores críticos:", resultado.critical_values)
print("Significancia:", resultado.significance_level)