// Crear el mapa centrado en el departamento de La Paz
const map = L.map('map').setView([13.45, -89.1], 11);

// Cargar la capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Definir los puntos de interés en La Paz con lugar, fecha, distrito, cantón, y link a la publicación de Facebook
const geoJSONData = {
    "type": "FeatureCollection",
    "features": [
        
        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "27-10-2024",
                "distrito": "El Rosario",
                "canton": "El Pedregal",
                "facebook": "https://www.facebook.com/share/p/6Yv9Kq77dV97UzQU/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.014421, 13.457248]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Entrega de pelota",
                "fecha": "25-09-2024",
                "distrito": "San Pedro Masahuat",
                "canton": "Astoria",
                "facebook": "https://www.facebook.com/share/p/V2PYPcytkM63kFTL/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.041231,  13.457200]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Celebración del día del niño",
                "fecha": "01-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "La Lucha",
                "facebook": "https://www.facebook.com/share/p/NoQKYrbK3tMjnfdG/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.824481, 13.460120]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Entrega de Toritos",
                "fecha": "02-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "Barrio Analco",
                "facebook": "https://www.facebook.com/share/p/xXT2HG8mbswFTV13/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.872987, 13.514073]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "05-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "Col. 27 septiembre",
                "facebook": "https://www.facebook.com/share/p/3U4KRAkKSLVTSDc9/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.870794, 13.517311]
            }
        },

         {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "06-10-2024",
                "distrito": "San Pedro Masahuat",
                "canton": "Miraflores",
                "facebook": "https://www.facebook.com/share/p/nvAn2KK38WUD3ukG/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.051588, 13.487653]
            }
        },

         {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "06-10-2024",
                "distrito": "Santiago Nonualco",
                "canton": "Santiago Nonualco",
                "facebook": "https://www.facebook.com/share/p/KpMbHRdVs9beAsSo/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.935839, 13.507741]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "10-10-2024",
                "distrito": "Santiago Nonualco",
                "canton": "San Antonio Arriba",
                "facebook": "https://www.facebook.com/share/p/p2Fs2gbb9mD4ELBi/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.916176, 13.551852]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "11-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "Zacatecoluca",
                "facebook": "https://www.facebook.com/share/p/1vHQ6EiFyfnYfQjy/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.869380, 13.506581]
            }
        },


        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "14-10-2024",
                "distrito": "El Rosario",
                "canton": "El Rosario",
                "facebook": "https://www.facebook.com/share/p/phpD1pM58ioAcmpR/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.030225, 13.496843]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Entrega de canastas",
                "fecha": "14-10-2024",
                "distrito": "San Luis Talpa",
                "canton": "Miraflores",
                "facebook": "https://www.facebook.com/share/p/sxPkLbgDt55NjZzV/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.056798, 13.477629]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Entrega de canastas",
                "fecha": "18-10-2024",
                "distrito": "San Luis Talpa",
                "canton": "Miraflores",
                "facebook": "https://www.facebook.com/share/p/sxPkLbgDt55NjZzV/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.056798, 13.477629]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Día del juego",
                "fecha": "18-10-2024",
                "distrito": "El Rosario",
                "canton": "El Rosario",
                "facebook": "https://www.facebook.com/share/p/TThK31tsWTkqYsys/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.026386, 13.497497]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Día del juego",
                "fecha": "18-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "La Lucha",
                "facebook": "https://www.facebook.com/share/p/m6L916HM4gEpYxGQ/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.844617, 13.46704]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "26-10-2024",
                "distrito": "Zacatecoluca",
                "canton": "Escuintla",
                "facebook": "https://www.facebook.com/share/p/jXJrQ4tFURdBnU7M/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.889464, 13.456060]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Fiesta infantil",
                "fecha": "25-10-2024",
                "distrito": "La Herradura",
                "canton": "Bordo chele",
                "facebook": "https://www.facebook.com/share/p/U8keBKFavubxDbmC/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.005623, 13.345877]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Implementos deportivos (Tacos)",
                "fecha": "14-09-2024",
                "distrito": "San Pedro Masahuat",
                "canton": "El Achiotal",
                "facebook": "https://www.facebook.com/share/p/CQCqrzTV6cXNGnpt/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-89.032814, 13.404039]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "lugar": "Entrega de instrumentos",
                "fecha": "09-09-2024",
                "distrito": "San Juan Nonualco",
                "canton": "San Juan Nonualco",
                "facebook": "https://www.facebook.com/share/p/8kAisc7xxma2ELEX/" // Enlace a la publicación de Facebook
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-88.897234, 13.501521]
            }
        }






        // Otras entradas comentadas
    ]
};

// Agregar los puntos al mapa
L.geoJSON(geoJSONData, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`
            <strong>${feature.properties.lugar}</strong><br>
            Fecha: ${feature.properties.fecha}<br>
            Distrito: ${feature.properties.distrito}<br>
            Cantón: ${feature.properties.canton}<br>
            <a href="${feature.properties.facebook}" target="_blank">Ver publicación en Facebook</a>
        `);
    }
}).addTo(map);
