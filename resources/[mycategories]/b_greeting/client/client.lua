AddEventHandler('playerSpawned', function()
    TriggerServerEvent('b_greeting:show')
end)


RegisterCommand('testGreeting', function()
    TriggerServerEvent('b_greeting:show')
end)
