let grafico = null;

export function renderizarGraficoIntereses(registros) {
  const canvas = document.getElementById('graficoIntereses');
  if (!canvas || !window.Chart) return;

  const conteo = contarPorInteres(registros);
  const etiquetas = Object.keys(conteo);
  const datos = Object.values(conteo);

  if (grafico) {
    grafico.destroy();
  }

  grafico = new window.Chart(canvas, {
    type: 'bar',
    data: {
      labels: etiquetas.length ? etiquetas : ['Sin registros'],
      datasets: [{
        label: 'Cantidad de visitantes',
        data: datos.length ? datos : [0],
        backgroundColor: ['#1f7a4d', '#2f7f8f', '#d99a31', '#7fb58f'],
        borderRadius: 8,
        borderSkipped: false,
        maxBarThickness: 44
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#667085',
            font: {
              weight: '600'
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(102, 112, 133, 0.16)'
          },
          ticks: {
            color: '#667085',
            precision: 0
          }
        }
      }
    }
  });
}

function contarPorInteres(registros) {
  return (registros || []).reduce((acumulador, registro) => {
    const interes = registro.interes || 'Sin interes';
    acumulador[interes] = (acumulador[interes] || 0) + 1;
    return acumulador;
  }, {});
}
