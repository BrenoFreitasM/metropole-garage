RegisterCommand('setGreeting', function (source, args, rawCommand)
    local identifier = GetPlayerIdentifierByType(source, 'license')
    local greeting = string.sub(rawCommand, 13)

    TriggerClientEvent('chat:addMessage', source, {
        args = {`greeting: ${greeting} args: ${args}`}
    })

    MySQL.insert('INSERT INTO greetings (identifier, greeting) VALUES (?, ?) ON DUPLICATE KEY UPDATE greeting = ?', {
        identifier,
        greeting,
        greeting,
    }, function ()
        TriggerClientEvent('chat:addMessage', source, {
            args = {'Your greeting has been saved!'}
        })

        TriggerClientEvent('chat:addMessage', playerId, {
            args = { greeting }
        })
    end)
end)

RegisterNetEvent('b_greeting:show', function ()
    local playerId = source
    local identifier = GetPlayerIdentifierByType(playerId, 'license')

    MySQL.scalar('SELECT greeting FROM greetings WHERE identifier = ?', {
        identifier
    }, function(greeting)
        if not greeting then
            return
        end

        TriggerClientEvent('chat:addMessage', playerId, {
            args = {greeting}
        })
    end)
end)