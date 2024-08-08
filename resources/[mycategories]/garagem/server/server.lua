local oxmysql = require('oxmysql')

RegisterNUICallback('getCars', function(_, cb)
    local sql = "SELECT name, code, image FROM vehicles"
    
    oxmysql.execute(sql, {}, function(result)
        if result then
            cb(result)
        else
            cb({})
        end
    end)
end)
