fx_version 'cerulean'
game 'gta5'

-- ui_page 'web/index.html'
ui_page 'web/build/index.html'


files {
  'web/index.html',
  'web/**.js',
  'web/**.css',
}

client_scripts {
  'client/client.lua',
}

server_scripts {
  '@oxmysql/lib/MySQL.lua',
  'server/server.lua'
}
